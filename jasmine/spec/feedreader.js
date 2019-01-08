/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
	/* This is our first test suite - a test suite just contains
	 * a related set of tests. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */
	describe('RSS Feeds', function () {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty.
		 */
		it('are defined.', function () {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


		/* This is our second test - it tests to ensure that every RSS
		 * feed has a URL defined and that the URL is not empty.
		 */
		it('have defined URL and they are not empty.', function () {
			for (let feed of allFeeds) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			}
		});


		/* This is our third test - it tests to ensure that every RSS
		 * feed has a name defined and that the name is not empty.
		 */
		it('have defined names and they are not empty.', function () {
			for (let feed of allFeeds) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			}
		});
	});


	/* This is our second test suite - This suite is about the Menu Icon.*/
	describe('The menu', function () {

		/* This is our fourth test - it tests to ensure that the menu element is
		 * hidden by default.
		 */
		it('is hidden by default.', function () {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});

		/* This is our fifth test - it tests to ensure that the menu changes
		 * visibility when the menu icon is clicked. This test
		 * should have two expectations: does the menu display when
		 * clicked and does it hide when clicked again.
		 */
		it('changes visibility when icon link is clicked.', function () {
			//Clicking for the first time has to show the menu.
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(false);
			//Clicking for the second time has to hide the menu.
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
	});

	/* This is our third test suite - This suite is about "Initial Entries" */
	describe('Initial entries', function () {

		beforeEach(function (done) {
			loadFeed(0, done)
		});

		/* This is our sixth test - it tests to ensure that when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 */
		it('exist.', function () {
			expect($('.feed .entry').length).toBeGreaterThan(0);
		});

	});
	/* This is our fourth test suite - This suite is about "New Feed Selection" */
	describe('New Feed Selection', function () {
		let feedInitial;
		beforeEach(function (done) {
			//$('.feed').empty();
			loadFeed(0, function () {
				//Store text/feed in this variable.
				feedInitial = $('.feed').html();
				//Loading second feed
				loadFeed(1, done);
			});
		});


		/* This is our seventh test - it tests to ensure that when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 */
		it('must be different from existing ones.', function () {

			expect($('.feed').html()).not.toEqual(feedInitial);

		});

	});

}());
