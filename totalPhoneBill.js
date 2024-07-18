// boocamp totalPhoneBill.js
function totalPhoneBill(phoneString) {
    let total = 0;
    const calls = phoneString.split(',').filter(call => call.includes('call')).length;
    const sms = phoneString.split(',').filter(s => s.includes('sms')).length;
    total = (calls * 2.75) + (sms * 0.65);
    return `R${total.toFixed(2)}`;
}
