let depButton = document.querySelector('.dep-btn');
depButton.addEventListener('click', function (){
    const paymentWindow = window.open(
        './preloader.html?token=qweqweqweqwe&payment=visa&count=100',
        'qwe',
        'height=500,width=500,left=500,top=200'
    );
    alert(document.referrer);
    setTimeout(()=>{
        paymentWindow.document.location = './payment.html'
    },2000)
});