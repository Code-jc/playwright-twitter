const { chromium } = require('playwright');

(async () => {
    //Launch new browser and create new page
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();

    // Navigate to twitter
    await page.goto('https://www.twitter.com/login');
    //Fill out the login fields and click Log In
    await page.fill('//input[@name=\'session[username_or_email]\'][@type=\'text\']','jkdev11');
    await page.fill('input[type="password"]','JKtest12');
    await page.click('div[data-testid="LoginForm_Login_Button"]');

})();