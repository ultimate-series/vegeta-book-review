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
    }
    // 新しい記事はここに追加
    // 例:
    // {
    //     id: 2,
    //     title: "次の本のタイトル",
    //     subtitle: "サブタイトル",
    //     category: "力",
    //     categoryName: "ビジネス戦略",
    //     author: "著者名",
    //     date: "2025.01.20",
    //     image: "画像URL",
    //     excerpt: "紹介文",
    //     url: "article-xxx.html",
    //     rating: 8500,
    //     featured: false
    // }
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