export function keyExtractor(item, index) {
    return item.id + index;
}



export const productItem = (item) => {

    console.log(item, 'item');

}

export function youSave(item) {
    console.log(item, 'item');
    const minus = item?.mrp_price - item?.our_price
    return minus
}
