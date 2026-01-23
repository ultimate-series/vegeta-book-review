// 記事データ管理ファイル
// 新しい記事を追加する時は、このリストに追加するだけでOK!

const articlesData = [
    {
        id: 1,
        title: "完訳 7つの習慣",
        subtitle: "人格主義の回復",
        category: "技",
        categoryName: "思考の技術",
        author: "スティーブン・R・コヴィー",
        date: "2025.01.15",
        image: "https://sspark.genspark.ai/cfimages?u1=J9mHC2esJN59uVSGWgeEHyNXiqBQmo7AWWkAOfRK6Vr9DtLbOCvTh6bIuLjPpXVW8rWSiRGvOVf9wYzUnl55U952fQ%3D%3D&u2=eL2mk2ixJsTlvTCT&width=2560",
        excerpt: "貴様らに真の原則主義を教えてやる。この書物には、エリート戦士が守るべき鉄則が記されている。",
        url: "article-7-habits.html",
        rating: 9500,
        featured: true
    },
    {
        id: 2,
        title: "十角館の殺人",
        subtitle: "新本格ミステリーの原点、この俺が認めた推理小説だ",
        category: "語",
        categoryName: "小説・物語",
        author: "綾辻行人",
        date: "2025.12.05",
        image: "https://sspark.genspark.ai/cfimages?u1=LmFAyUq4fODWsXy4i%2FfTMtx4cgnrBS6AGfK9zBdOKGDtLrudmyeMeoZ%2BO0qcq%2BsCoYhwmBsvKxe9QLXJkIWhZIi4pacjfybv%2F9CNyWDUXv3yoMOUh0w6jMA%3D&u2=yqvQ1jfXdpGFOeZj&width=2560",
        excerpt: "新本格ミステリーの原点。孤島の館で繰り広げられる連続殺人、そして衝撃のラスト――この一撃を受けて立てる者だけが、真の推理小説ファンだ。",
        url: "article-jukkakukan.html",
        rating: 9200,
        featured: false
    },
    {
        id: 3,
        title: "悪いものが、来ませんように",
        subtitle: "人間の依存と狂気を描いた傑作心理サスペンス",
        category: "語",
        categoryName: "小説・物語",
        author: "芦沢央",
        date: "2025.01.23",
        image: "https://sspark.genspark.ai/cfimages?u1=vo0d3b5DHBMKunRL7aXWQKQaJy5Q4ydM1vBu%2FzIs8vNJGlDlTGbkEAMW9v%2BYalzzRFG7gJ5mYIYxz3S%2BbZwmmKDvxM%2BwdNpyXja3X5fF5tOOB4Ba5qkzcuk%3D&u2=hmg%2FrWfpDTjfpuAr&width=2560",
        excerpt: "面白いが、インパクトには欠ける。依存関係と狂気を描いた心理サスペンスだが、この俺を完全に満足させるには至らなかった。",
        url: "article-waruimono.html",
        rating: 7200,
        featured: false
    }
    // 新しい記事はここに追加
];

// カテゴリーデータ（記事数を自動カウント）
const categoriesData = [
    { id: "力", name: "ビジネス戦略", icon: "力" },
    { id: "技", name: "思考の技術", icon: "技" },
    { id: "闘", name: "実戦心理学", icon: "闘" },
    { id: "速", name: "成長加速術", icon: "速" },
    { id: "語", name: "小説・物語", icon: "語" }
];

// カテゴリー別の記事数をカウント
function getCategoryCount(categoryId) {
    return articlesData.filter(article => article.category === categoryId).length;
}

// 統計データを取得
function getStats() {
    return {
        totalArticles: articlesData.length,
        totalCategories: categoriesData.filter(cat => getCategoryCount(cat.id) > 0).length
    };
}

// 最新記事を取得（最大3件）
function getLatestArticles(limit = 3) {
    return articlesData
        .sort((a, b) => b.id - a.id)
        .slice(0, limit);
}

// 注目記事を取得
function getFeaturedArticle() {
    return articlesData.find(article => article.featured);
}
