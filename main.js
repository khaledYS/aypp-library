const aypp = {
    ayyps: {
        alerts: {
        
        
            // lets mention that its asyncrnouns 
            // ***************
            /* cite ( 1 ) */
            // ***************
            confirm : function(options){
                return new Promise( (res, rej)=> {
                    // our component that has some options 
                    const component = `
                        <div class="aypp-confirm" ${options && options.styles && options.styles.container ? `style="${options.styles.container}"` :  '' }>
                            <div body ${options && options.styles && options.styles.body ? `style="${options.styles.body}"` :  '' } >${( options && options.body) ? options.body : 'Are you sure?'}</div>
                            
                            ${options && options.hr == true || options && options.hr == undefined || !options ? '<hr>' : '' }
                            
        
                            <div agreement ${options && options.styles && options.styles.btnContainer ? `style="${options.styles.btnContainer}"` :  '' }>
                                <button option1 ${options && options.styles && options.styles.option1 ? `style="${options.styles.option1}"` :  '' }>${(options && options.option1) ? options.option1 : 'Yes'}</button>
                                <button option2 ${options && options.styles && options.styles.option2 ? `style="${options.styles.option2}"` :  '' }>${(options && options.option2) ? options.option2 : 'Cancel'}</button>
                        </div>
                        `
                        
                        // creating and inserting it to the dom
                        const container = document.createElement('div')
                        container.className = 'aypp-confirm-container';
                        container.innerHTML = component
                        document.body.append(container)
                        
                        // on the option1 button get clikcked or option2 
                        // select the options buttons in the line
                        const triggers = container.querySelectorAll('div[agreement] > button')
        
                        triggers.forEach((element) => {
                            element.onclick = (e)=>{
                                value = e.target.textContent 
                                res(value)
                                container.remove()
                            }
                        });
                })
                
            }
        }
    },
    ayypc: {
        
    }
}




/* 

    _______________
    |    cites     |


******************************
    cite  (  1  )  {

        * it is so simpul
        * the idea is to creat a promise that i will give the user choosen choose
        * and of curse returning the pormise 
        * and the i creat my component that will be inserted into the container
        * and also i have some kind of options that will be inserted into the component ,
        * that will check if the option is exist and not undefined then it will insert thet specifec option
        * i will show the options schema down  
        * lets mention that i will creat the component like a normal string variable
        * and  the container will be a js dom 
        * and then it will creat the container by js dom 
        * then i select the options buttons 'both of them'
        * and if the user clicked on one of them it will remove the whooole container,
        * and it will return the option that the user chaase

    }
******************************
*/


export default aypp