const SecurePage = require('../pageobjects/secure.page')

describe('Perform a fail search and entry', () => {
    it('Search for a existent product', async () => {
        browser.url('');
        const input = await $('#search_query_top');
        await input.click();
        await input.setValue('Blouse');
        const search = await $('xpath://*[@id="searchbox"]/button');
        await search.click();
    })
    it('Search for a non-existent product', async () => {
        const input = await $('#search_query_top');
        await input.click();
        await input.setValue('tenis');
        const search = await $('xpath://*[@id="searchbox"]/button');
        await search.click();
        const message = $('//*[@id="center_column"]/p');
        await expect(message).toHaveTextContaining('No results were found for your search "tenis"');
   })
    it('Invalid username and password', async () => {
        const input = await $('/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]/a');
        await input.click();
        const email = await $('//*[@id="email"]');
        await email.click();
        await email.setValue('test@test.com');
        const pswd = await $('//*[@id="passwd"]');
        await pswd.click();
        await pswd.setValue('test.com');
        const btn = await $('//*[@id="SubmitLogin"]')
        await btn.click();
        const message = $('//*[@id="center_column"]/div[1]');
        message.scrollIntoView();
        await expect(message).toHaveTextContaining('There is 1 error');
    })
})

