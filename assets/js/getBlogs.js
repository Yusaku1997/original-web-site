// import { maxDisplayNum } from "./utils/blogSettings";

// JSONデータを読み込む
fetch("./assets/json/blogs.json")
  .then((response) => response.json())
  .then((blogs) => {
    const blogCards = document.querySelector(".blog-list-cards");

    for (let i = 0; i < blogs.length && i < 3; i++) {
      // ブログリンク
      const blogCard = document.createElement("a");
      blogCard.href = "#";
      blogCard.className = "blog-list-card";
      // ブログサムネイル
      const imgBlock = document.createElement("div");
      imgBlock.className = "blog-list-card-img-outer";
      // ブログコンテンツ
      const contentsBlock = document.createElement("div");
      contentsBlock.className = "blog-list-card-contents";
      // ブログカテゴリー一覧
      const categoryBlock = document.createElement("div");
      categoryBlock.className = "blog-list-card-categories";

      imgBlock.innerHTML = `<img src="${blogs[i].photo}" alt="サムネイル" class="blog-list-card-img" />`;
      contentsBlock.innerHTML = `
        <span class="blog-date">${blogs[i].date}</span>

        <p class="blog-list-card-title">${blogs[i].title}</p>

        <p class="blog-list-card-excerpt">${blogs[i].excerpt}</p>
      `;

      const categories = blogs[i].category;
      categories.forEach((category) => {
        const span = document.createElement("span");
        span.className = "category";
        span.textContent = category;

        categoryBlock.appendChild(span);
      });

      contentsBlock.appendChild(categoryBlock);

      blogCard.appendChild(imgBlock);
      blogCard.appendChild(contentsBlock);
      blogCards.appendChild(blogCard);
    }
  })
  .catch((error) => console.error("データの読み込みに失敗しました:", error));
