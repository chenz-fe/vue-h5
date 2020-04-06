const execSync = require("child_process").execSync;
const path = require("path");
const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");
console.log("pre-commit hook start imagemin! \n");
let diff = getDiffFiles();
compressPics(diff);

function getDiffFiles(type) {
  // pre-commit钩子本身不传递参数
  //https://git-scm.com/docs/githooks/1.7.4#_pre_commit
  // 所以通过git diff 命令拿到本次提交涉及的变动文件
  let root = process.cwd();
  let files = execSync("git diff --cached --name-status HEAD")
    .toString()
    .split("\n");
  let result = [];
  // add, delete, modified, renamed, copied
  type = type || "admrc";
  let types = type.split("").map(t => {
    return t.toLowerCase();
  });
  files.forEach(file => {
    if (!file) {
      return;
    }
    let temp = file.split(/[\n\t]/);
    let status = temp[0].toLowerCase();
    let filePath = root + "/" + temp[1];
    let extName = path.extname(filePath).slice(1);

    if (types.length && ~types.indexOf(status)) {
      result.push({
        status: status, // admrc中的一个
        path: filePath, // 绝对路径
        subpath: temp[1], // 相对路径
        extName: extName // 扩展名
      });
    }
  });
  return result;
}

function compressPics(files) {
  let pngs = files.filter(
    file => file.extName === "png" && ["a", "m"].includes(file.status)
  );
  console.log(pngs);
  let parentFolder = {};
  pngs.forEach(x => {
    // 根据不同父级目录分类
    let pf = x.subpath.slice(0, x.subpath.lastIndexOf("/"));
    parentFolder[pf]
      ? parentFolder[pf].push(x.subpath)
      : (parentFolder[pf] = [x.subpath]);
  });

  for (let pf in parentFolder) {
    imagemin(parentFolder[pf], {
      // 原图片目录
      destination: pf, // 生成图片的目录
      plugins: [
        imageminPngquant({
          speed: 1,
          quality: [0.4, 0.5]
        })
      ]
    })
      .then(res => {
        console.log(res);
        execSync("git add . ");
      })
      .catch(err => {
        console.log(err);
        process.exit(1);
      });
  }
}
