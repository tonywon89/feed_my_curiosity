#FeedMyCuriosity

[Heroku link][heroku] FeedMyCuriosity

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

FeedMyCuriosity is a web application inspired by Feedly that will be built using Ruby on Rails and React.js. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for a Feedly-inspired site: CRUD collections, displaying the feeds of the user, and providing feeds for the user to choose from
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README

## Product Goals and Priorities
### MVP
- [ ] Create an account
- [ ] Log in/ Log out, including as a Guest/Demo User
- [ ] Provide feeds for the user to choose from
- [ ] Make and delete collections
- [ ] Display user's feeds and collections
- [ ] Add and remove feeds from collections
- [ ] Provides link to go to feed's website
- [ ] Feeds display recent articles
- [ ] Displays specific feeds
- [ ] Displays specific articles

### Expected Features
- [ ] Users can save articles
- [ ] Feeds show number of hits
- [ ] Categorizes feeds by date
- [ ] Mark article as read once user has clicked on article in feed
- [ ] Displays time the article was posted
- [ ] Users can import their own feeds
- [ ] Able to search for feeds
- [ ] Have subcategories of feeds
- [ ] Feeds have logos, Users have a profile picture
- [ ] Have a button to save articles to read for later
- [ ] User can hide or save articles

### Bonus Features
- [ ] User can choose how to display the articles of a feed
- [ ] Embed videos for feeds with videos
- [ ] Displays related feeds when displaying articles of a particular feed
- [ ] User can mark all of the articles of a feed as read all at once
- [ ] User can set preferences
- [ ] User can select a theme for sidebar
- [ ] User can share collections through a url

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days), deploy to Heroku

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] setup Webpack and Flux scaffold
- [ ] create `User` model
- [ ] authentication
  - [ ] ensure_session_token
  - [ ] reset_session_token
  - [ ] generate session_token
  - [ ] current_user
  - [ ] password=
  - [ ] validations
  - [ ] logout!
  - [ ] login
- [ ] user signup/signin pages
  - [ ] make views for now, refactor into React Component later
- [ ] blank landing page after sign in
- [ ] seed some users to database
- setup Heroku
- deply to Heroku

### Phase 2: Feeds Model, API, basic APIUtil, Actions, and Store (0.5 days)

**Objective** Feeds can be retrieved through the API

- [ ] create `Feed` model
- [ ] seed the database with small amount of rss feeds from websites that provide it
- [ ] Retrieve feeds data by using an FeedAPI (`FeedsController`) to fetch the feed data
- [ ] jBuilder views for parsed data from Feed url using Feedjira gem
- [ ] setup `ApiUtil` to interact with the API
- [ ] test out API interaction in the console
- [ ] setup `FeedStore`, `FeedServerActions`, `FeedClientActions`
    - [ ] write the methods
    - [ ] test the methods
- deploy to Heroku

### Phase 3: Frontend Feeds display  (1.5 days)

**Objective** Feeds are fetched and displayed properly in their components

- [ ] setup the `FeedIndex` component
  - [ ] pass on each feed to `FeedIndexItem`
- [ ] setup `FeedIndexItem` component
  - [ ] displays title and logo of website (are links to the website)
  - [ ] displays description of website (clicking opens up modal with detail)
  - [ ] displays an "Add" button (clicking opens up a different sidebar with adding collection)
  - [ ] displays the photo and title of the first article (clicking opens an ArticleDetail)
- [ ] test by placing `FeedIndex` in DOM
- deploy to Heroku

### Phase 3.5: Style FeedIndex and FeedIndexItem(0.5 days)

- [ ] style `FeedIndex` to hold `FeedItem`s with proper spacing
- [ ] make `FeedIndexItem` resemble the ones on Feedly website
- [ ] deploy to Heroku

### Phase 4: Collections Model, API, basic APIUtil, and Store  (1 day)

**Objective:** Collections can be created, read, edited, and destroyed through the API

- [ ] create `Collection` model
- [ ] CRUD API for collections, should be nested under single user (`CollectionsController`) (Under 'Organize' in sidebar)
- [ ] jBuilder views for collections
- [ ] seed the database with some collections under existing users
  - [ ] Add feeds to collections
- [ ] test APIUtil interaction with API in the console
- [ ] implement `CollectionClientActions` and `CollectionServerActions` methods for collections
- [ ] create `CollectionStore`
- [ ] test action and store methods
- [ ] deploy to Heroku

### Phase 5: Sidebar (1 day)

**Objective** Display a sidebar with the username, collections and their feeds, and other links when logged in, else generic page

- [ ] Make a sidebar component
  - [ ] two cases: logged in or not logged in
  - [ ] displays different things depending on log in state
- [ ] logged in display  
  - [ ] username at the bottom, with logout button
  - [ ] has a "pin" button
    - [ ] add functionality to make the side bar keep displayed
    - [ ] change text of "pin" to "unpin" and vice versa  
  - [ ] has a "Today" link
  - [ ] has a "Saved For Later" link
  - [ ] has a link to an add content
  - [ ] `SidebarCollectionIndex` is display (clicks show the collection)
    - [ ] each `SidebarCollectionindexItem` has a dropdown that displays the feeds (each feed links to `CollectionFeedDetail`);
  - [ ] has a "organize collections" link (leads to `CollectionIndex`)
- [ ] logged out display  
  - [ ] has title of website and brief catch phase
  - [ ] has login button
  - [ ] has login as demo user (with a short descriptive text)
  - [ ] has sign up button
  - [ ] buttons open up a modal
    - [ ] has a form
    - [ ] has a submit button

- [ ] Add the styles to make it look nice
- [ ] deploy to Heroku

### Phase 6: Flux Architecture for Collections and Articles and React Router (2 days)

**Objective** Allow user to CRUD functionality for collections and articles through user interface.

- [ ] implement collection components, building out the flux loop as needed
  - [ ] `CollectionsIndex`
  - [ ] `CollectionIndexItem`
  - [ ] `FeedItem` (will probably rename to `CollectionFeedItem`)
  - [ ] `CollectionArticles`
  - [ ] `CollectionFeedDetail`
- [ ] implement article components
  - [ ] `ArticleDateIndex`
  - [ ] `ArticleItem`
- [ ] set up React Router based on component hierarchy diagram
- [ ] test all routes
- [ ] create a Demo user that can sign in with data
  - [ ] should have a link that automatically signs them up
  - [ ] should have sufficient seed data to emulate a real user
- [ ] deploy to Heroku


### Phase 7: PopOutDetails (1.5 days)

**Objective** Have a overlying window with for individual articles and feeds when clicked

- [ ] make `FeedDetail` component
  - [ ] `FeedHeader`
  - [ ] `ArticleDateIndex`
- [ ] style `FeedDetail`
- [ ] make it appear in `PopOutDetails`

- [ ] make `ArticleDetail`
- [ ] style `ArticleDetail`
- [ ] make it appear in `PopOutDetails`
- [ ] deploy to Heroku

### Phase 8: AddFeedSidebar (1 day)

**Objective** Emulate Feedly's sidebar for adding feeds

- [ ] `AddFeedSidebar` component
  - [ ] new collection Link that turns into a form
    - [ ] write form to create new collection
      - [ ] write out flux cycle for form
      - [ ] test to make sure new collection was created with added feed
  - [ ] `AddFeedCollectionIndex` component
    - [ ] `AddFeedCollectionIndexItem` component
      - [ ] can click on it to add a feed to the collection
      - [ ] build out flux cycle for it
      - [ ] updates with a check mark after being added
      - [ ] Test collections to make sure it has a feed
- [ ] Style it to make it resemble feedly
  - [ ] Sidebar appears on top of everything else
- [ ] deploy to Heroku

### Phase 9: Clean up code (1 day)

**Objective** Finish everything up and make it presentable as an MVP before moving on to the other features.

- [ ] write production README
- [ ] deploy to Heroku and make sure everything is working
- [ ] finalize styling touches
- [ ] buy a domain name, and set it up
- [ ] upgrade Heroku account

### Bonus (TBD)

- [ ] FeedIndexItem has number of readers, number of articles/Week
- [ ] FeedIndexItem photo is black and white initially, then fades into color
- [ ] Modals can have multiple tabs
- [ ] Preferences link
