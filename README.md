#FeedMyCuriosity

[Heroku link][heroku] FeedMyCuriosity

[heroku]: http://feedmycuriosity.herokuapp.com/

## Minimum Viable Product

FeedMyCuriosity is a web application inspired by Feedly that will be built using Ruby on Rails and React.js. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for a Feedly-inspired site: CRUD collections, displaying the feeds of the user, and providing feeds for the user to choose from
- [x] Hosting on Heroku
- [x] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README

## Product Goals and Priorities
### MVP
- [x] Create an account
- [x] Log in/ Log out
- [x] Log in as a Guest/Demo User
- [x] Provide feeds for the user to choose from
- [ ] Make and delete collections
- [ ] Display user's feeds and collections
- [ ] Add and remove feeds from collections
- [x] Provides link to go to feed's website
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

### Phase 1: Backend setup and User Authentication (1 day), deploy to Heroku

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] setup Webpack and Flux scaffold
- [x] create `User` model
- [x] backend authentication
  - [x] ensure_session_token
  - [x] reset_session_token
  - [x] generate session_token
  - [x] current_user
  - [x] password=
  - [x] validations
  - [x] logout!
  - [x] login
- [x] user signup/signin pages
  - [x] make views for now, refactor into React Component later
- [x] blank landing page after sign in
- [x] Style Sign Up and Login Modals
- [x] Basic Style for Splash Page
- [x] seed some users to database
- [x] setup Heroku
- [x] deploy to Heroku

### Phase 2: Feeds Model, API, basic APIUtil, Actions, and Store (0.5 days)

**Objective** Feeds can be retrieved through the API

- [x] create `Feed` model
- [x] seed the database with small amount of rss feeds from websites that provide it
- [x] Retrieve feeds data by using a FeedAPI (`FeedsController`) to fetch the feed data
- [x] jBuilder views for parsed data from Feed url using Feedjira gem
- [x] setup `ApiUtil` to interact with the API
- [x] test out API interaction in the console
- [x] setup `FeedStore`, `FeedServerActions`, `FeedClientActions`
    - [x] write the methods
    - [x] test the methods

### Phase 3: Frontend Feeds display  (1.5 days)

**Objective** Feeds are fetched and displayed properly in their components

- [x] setup the `FeedIndex` component
  - [x] pass on each feed to `FeedIndexItem`
- [x] setup `FeedIndexItem` component
  - [x] displays title (link to website)
  - [ ] displays logo of website
  - [x] displays description of website (clicking opens up modal with detail)
  - [x] displays an "Add" button (clicking opens up a different sidebar with adding collection)
  - [x] displays the photo and title of the first article (clicking opens an ArticleDetail)
- [x] test by placing `FeedIndex` in DOM

### Phase 3.5: Style FeedIndex and FeedIndexItem(0.5 days)

- [x] style `FeedIndex` to hold `FeedItem`s with proper spacing
- [x] make `FeedIndexItem` resemble the ones on Feedly website
- [x] deploy to Heroku

### Phase 4: Collections Model, API, basic APIUtil, and Store  (1 day)

**Objective:** Collections can be created, read, edited, and destroyed through the API

- [x] create `Collection` model
- [x] Add associations to models
  - [x] test associations
- [x] CRUD API for collections, should be nested under single user (`CollectionsController`) (Under 'Organize' in sidebar)
  - [x] get all collections
  - [x] get single collection
  - [x] create collections
  - [x] update collections
  - [x] destroy collections
- [x] jBuilder views for collections
- [x] seed the database with some collections under existing users
  - [x] Add feeds to collections
- [x] test APIUtil interaction with API in the console
- [x] implement `CollectionClientActions` and `CollectionServerActions` methods for collections
- [x] create `CollectionStore`
- [x] test action and store methods
- [x] deploy to Heroku

### Phase 5: Sidebar (1 day)

**Objective** Display a sidebar with the username, collections and their feeds, and other links when logged in, else generic page

- [x] Make a sidebar component
  - [x] displays different things depending on log in state
- [x] logged in display  
  - [x] username at the bottom, with logout button
  - [x] has a "pin" button
    - [x] add functionality to make the side bar keep displayed
    - [x] change text of "pin" to "unpin" and vice versa  
  - [x] has a "Today" link
  - [x] has a "Saved For Later" link
  - [x] has a link to an add content
  - [x] `SidebarCollectionIndex` is displayed (clicks show the collection)
    - [x] each `SidebarCollectionindexItem` has a dropdown that displays the feeds (each feed links to `CollectionFeedDetail`);
  - [x] has a "organize collections" link (leads to `CollectionIndex`)
- [x] logged out display  
  - [x] has title of website and brief catch phase
  - [x] has login button
  - [x] has login as demo user (with a short descriptive text)
  - [x] has sign up button
  - [x] buttons open up a modal
    - [x] has a form
    - [x] has a submit button

- [x] Add the styles to make it look nice
- [x] deploy to Heroku

### Phase 6: Flux Architecture for Collections and Articles and React Router (2 days)

**Objective** Allow user to CRUD functionality for collections and articles through user interface.

- [ ] implement collection components, building out the flux loop as needed
  - [x] `CollectionsIndex`
  - [x] `CollectionIndexItem`
  - [x] `FeedItem` (will probably rename to `CollectionFeedItem`)
  - [ ] `CollectionDetail`
  - [ ] `FeedDetail`
- [ ] implement article components
  - [ ] `ArticleIndex` (can make into ArticleDateIndex Later)
  - [ ] `ArticleIndexItem`
- [ ] set up React Router based on component hierarchy diagram
- [ ] test all routes
- [x] create a Demo user that can sign in with data
  - [x] should have a link that automatically signs them up
  - [ ] should have sufficient seed data to emulate a real user
- [ ] deploy to Heroku

### Phase 7: AddFeedSidebar (1 day)

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

### Phase 8: PopOutDetails (1.5 days)

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

### Phase 9: Clean up code (1 day)

**Objective** Finish everything up and make it presentable as an MVP before moving on to the other features.

- [ ] write production README
- [ ] deploy to Heroku and make sure everything is working
- [ ] finalize styling touches
- [x] add favicon
- [ ] buy a domain name, and set it up
- [ ] upgrade Heroku account

### Bonus (TBD)

- [ ] FeedIndexItem has number of readers, number of articles/Week
- [ ] FeedIndexItem photo is black and white initially, then fades into color
- [ ] Modals can have multiple tabs
- [ ] Preferences link
- [ ] Add hovering animations to buttons (using hover.css)
