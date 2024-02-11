const SecurePage = require('../pageobjects/secure.page')

describe('Perform a successful search and entry', () => {
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
    it('successful user registration', async () => {
        const input = await $('/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]/a');
        await input.click();
        const email = await $('//*[@id="email_create"]');
        await email.click();
        await email.setValue('test325t@test.com');
        const btn = await $('//*[@id="SubmitCreate"]');
        await btn.click();
        const gnder = $('//*[@id="uniform-id_gender1"]/span');
         await gnder.click();
         const firstname= $('//*[@id="customer_firstname"]');
         await firstname.setValue('tester');
         const lastname= $('#customer_lastname');
         await lastname.setValue('testeer'); 
        const passwd= $('#passwd');
         await passwd.setValue('09125687'); 
         const day= $('//*[@id="days"]/option[5]');
         await day.click();
         const mon= $('//*[@id="months"]/option[4]');
         await mon.click();
         const yea= $('//*[@id="years"]/option[26]');
         await yea.click();
         const btn1= $('//*[@id="submitAccount"]');
         await btn1.click();
        const logout= $('//*[@id="header"]/div[2]/div/div/nav/div[2]/a')
         await logout.click();
     })
    it('Income and purchase flow', async () => {
        const input = await $('/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]/a');
        await input.click();
        const email = await $('//*[@id="email"]');
        await email.click();
        await email.setValue('test324t@test.com');
        const pswd = await $('//*[@id="passwd"]');
        await pswd.click();
        await pswd.setValue('09125687');
        const btn = await $('//*[@id="SubmitLogin"]');
        await btn.click();
        const input2 = await $('#search_query_top');
        await input2.click();
        await input2.setValue('Blouse');
        const search = await $('xpath://*[@id="searchbox"]/button');
        await search.click();
        const blouse = await $('//*[@id="center_column"]/ul/li/div/div[1]/div/a[1]/img');
        await blouse.click();
        const tall = await $('//*[@id="group_1"]/option[3]');
        await tall.click();
        const btn3 = await $('//*[@id="add_to_cart"]/button');
        await btn3.click();
        const message = $('//*[@id="layer_cart"]/div[1]/div[1]');
        await expect(message).toHaveTextContaining('Product successfully added to your shopping cart');
        const btnbuy = $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a');
        await btnbuy.click();
        const tittle = $('//*[@id="cart_title"]');
        await expect(tittle).toHaveTextContaining('SHOPPING-CART SUMMARY');
        const tprod = $('//*[@id="cart_summary"]/tfoot/tr[1]');
        await expect(tprod).toHaveTextContaining('Total products'); 
        tprod.scrollIntoView();
        const tship = $('//*[@id="cart_summary"]/tfoot/tr[3]');
        await expect(tship).toHaveTextContaining('Total shipping'); 
        tship.scrollIntoView();
        const total = $('//*[@id="cart_summary"]/tfoot/tr[5]/td[1]');
        await expect(total).toHaveTextContaining('TOTAL'); 
        const btn4 = await $('//*[@id="center_column"]/p[2]/a[1]');
        btn4.scrollIntoView();
        await btn4.click();
        const btn5 = await $('//*[@id="center_column"]/form/p/button');
        btn5.scrollIntoView();
        await btn5.click(); 
        const check = await $('//*[@id="uniform-cgv"]');
        await check.click(); 
        const btn6 = await $('//*[@id="form"]/p/button');
        btn6.scrollIntoView();
        await btn6.click(); 
        const paymentm = await $('//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a')
        await paymentm.click(); 
        const finish = await $('//*[@id="cart_navigation"]/button')
        await finish.click(); 
        const message3 = $('//*[@id="center_column"]/p[1]');
        await expect(message3).toHaveTextContaining('Your order on My Shop is complete.');
        const logout= $('//*[@id="header"]/div[2]/div/div/nav/div[2]/a')
        await logout.click();        
    })   
})

