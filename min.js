let stocks ={
    frults: ['strawberry',"grapes",'banana'],
    Liquids :['water','ice'],
    holder : ['cone','cup' ,'stick'],
    toppings : ['chocolate','peanuts']
}
let is_shop_open =true; //this checks if the shop is open /closed

//this function manages time with the work 
function time(ms){
    return new Promise( (resolve ,reject)=>{
       if(is_shop_open){
        setTimeout(resolve ,ms)
       }
       else{
        reject(console.log(`Shop is closed , came back another day`))
       }
    })
}
//this is an asynchron
async function Kitchen(){
try {
    await time(2000)
    console.log(`${stocks.frults[0]} was selected from the  fruilts`)

    console.log(`production has started`)

    await time(1000)
    console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} ws add to  the solution`);

    await time(3000)
    console.log(`${stocks.holder[0]} was selected from the list`)

    await time(1000)
    console.log(`${stocks.toppings[0]} was designed on the top of the Ice cream`)

    await time(4000)
    console.log(`Serving of the Ice Cream to the customer`)

} catch (error) {
    console.log(`Public day ,shop closed `,error)
}finally{
    
    console.log(`We love you so much ,came back another day`)
}
}
Kitchen()