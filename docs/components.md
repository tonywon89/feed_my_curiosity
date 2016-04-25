## Component Hierarchy

* `App`
  * `Sidebar`
    * `SidebarCollectionIndex`
    * `SidebarCollectionIndexItem`
  * `Children`
    * `Home` (Index Route)
      * `CollectionArticles` (for `Today` collection)
        * `ArticleIndex`
          * `ArticleIndexItem`
    * `CollectionIndex`
      * `CollectionIndexItem`
        * `FeedItem`
    * `FeedIndex`
      * `FeedIndexItem`
        * `FeedIndexItemArticle`
    * `CollectionArticles`
      * `ArticleIndex`
        * `ArticleIndexItem`
    * `CollectionFeedDetail`
      * `ArticleIndex`
        * `ArticleIndexItem`
  * `PopOutDetails`
    * `FeedDetail`
      * `FeedHeader`
      * `ArticleDateIndex`
      * `ArticleItem`
    * `ArticleDetail`
  * `AddFeedSidebar`
    * `AddFeedCollectionIndex`
      * `AddFeedCollectionIndexItem`
