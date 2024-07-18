// making use of bootcamp values
function enoughAirtime(usage, airtimeAvailable) {
    const costs = {
        call: 2.75,
        sms: 0.65,
        data: 12
    };
    const usageItems = usage.split(',');
    let totalCost = 0;

    usageItems.forEach(item => {
        const [type, quantity] = item.split(':');
        totalCost += costs[type.trim()] * Number(quantity.trim());
    });

    return airtimeAvailable - totalCost >= 0 ? `R${(airtimeAvailable - totalCost).toFixed(2)}` : 'Insufficient airtime';
}
