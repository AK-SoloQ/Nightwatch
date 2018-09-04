module.exports = {
    'Demo test Google': function (browser) {
        browser
            .url('https://forja.tn/movies')
            .waitForElementVisible('body', 5000)
            .waitForElementVisible('button[type=button]', 5000)
            .click('button[type=button]')
            .setValue('#search-input', 'deadpool')
            .pause(3000)
            .click('#medias_container > a')
            .pause(3000)
            .waitForElementVisible('button[type=button]', 5000)
            .click('button[type=button]')
            .waitForElementVisible('#playerContainer', 5000)
            .click('#playerContainer')
            .pause(15000)
            //.assert.containsText('body', 'notre serve')
            .end();
    }
};