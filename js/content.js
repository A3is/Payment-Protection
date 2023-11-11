function main_content() {

    const requiredWords = ["شماره کارت", "CVV2", "تاریخ انقضا", "رمز پویا" , "رمز دوم" , "مبلغ" , "کد امنیتی" ];
    const url = new URL(window.location.href);
    const matchingWords = requiredWords.filter(word => document.body.innerText.includes(word));

    const isValidAddress = (address) => {
        const pattern = /^https:\/\/[a-z0-9-]+\.(shaparak\.ir\/)/i;
        return pattern.test(address);
    };

    if (matchingWords.length >= 2 ) {
        if (!isValidAddress(url)) {
            const Body = document.getElementsByTagName('body')[0];
            const customContainer = document.createElement('div');
            customContainer.className = "custom-container";

            customContainer.innerHTML = '<div class="paymentprotection_div r15 b_red fade-in">\n' +
                '<img src="chrome-extension://jgbdolpjohpbipbmcpmbdalaoddoimmi/images/warning.png" class="paymentprotection_img" width="70" height="70" draggable="false" />\n'+
                '<div class="paymentprotection_title">هشدار امنیتی</div>\n'+
                '<div class="paymentprotection_text">در این صفحه از کلمات مربوط به درگاه پرداخت استفاده شده است!' +
                '<br style="clear: both">'+
                '<b>اگر در صفحه درگاه پرداخت هستید این درگاه امن نیست.</b>' +
                '<br style="clear: both">'+
                '[ از وارد کردن اطلاعات خود ، خودداری کنید. ]' +
                '</div>\n'+
                '<br style="clear: both">'+
                '<a class="paymentprotection_btn r10"><span>متوجه شدم</span></a>\n'+
                '<br style="clear: both">'+
                '</div>';

            Body.insertBefore(customContainer, Body.firstChild);

            const dialogButton = customContainer.querySelector('.paymentprotection_btn');
            dialogButton.addEventListener('click', function () {
                customContainer.classList.remove('fade-in');
                customContainer.classList.add('fade-out');
            });
        }//EndIF
    }//EndIF


    if (isValidAddress(url)) {
        const Body = document.getElementsByTagName('body')[0];
        const customContainer = document.createElement('div');
        customContainer.className = "custom-container";

        customContainer.innerHTML = '<div class="paymentprotection_div r15 b_green fade-in">\n' +
            '<img src="chrome-extension://jgbdolpjohpbipbmcpmbdalaoddoimmi/images/success.png" class="paymentprotection_img" width="70" height="70" draggable="false" />\n'+
            '<div class="paymentprotection_title">تایید درگاه</div>\n'+
            '<div class="paymentprotection_text">اصالت این درگاه پرداخت تایید شد.' +
            '<br style="clear: both">'+
            'میتوانید پرداخت خود را انجام دهید.' +
            '</div>\n'+
            '<br style="clear: both">'+
            '<a class="paymentprotection_btn r10"><span>متوجه شدم</span></a>\n'+
            '<br style="clear: both">'+
            '</div>';

        Body.insertBefore(customContainer, Body.firstChild);

        const dialogButton = customContainer.querySelector('.paymentprotection_btn');
        dialogButton.addEventListener('click', function () {
            customContainer.classList.remove('fade-in');
            customContainer.classList.add('fade-out');
        });
    }//EndIf

}//End main_content

main_content();