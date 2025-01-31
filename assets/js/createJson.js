const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDirectory = path.join(__dirname, "../md"); // Markdownファイルのディレクトリ
const outputFile = path.join(__dirname, "../json/blogs.json"); // 出力するJSONファイル

function generateBlogData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const blogs = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // YAML Front Matterをパース
    const { data, content } = matter(fileContents);

    return { ...data, content }; // メタデータと本文を結合
  });

  // JSONファイルとして保存
  fs.writeFileSync(outputFile, JSON.stringify(blogs, null, 2));
  console.log("JSONファイルを生成しました:", outputFile);
}

// 実行
generateBlogData();
