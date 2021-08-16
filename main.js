



// ************************
/*            cite ( 2 )             */
// ************************
class ayppc {
    constructor(el, options){
        try{
            // this will check if there is no element it will throw an error
            if(!el){
                throw new Error('the element in the function isn\'t defined ')
            }else{
                // if there is an element it will define it in the class scope
                this.el = el;
            }
            // this will check for if there is any options it will define it in the class scope 
            if(options){
                this.options = options;
            }

            // checking if the theres is going to be a container or not 
            // if false then ..........
            if(options && options.noContainer){
                // it will define the the main element as the container in the class scope 
                this.container = document.createElement('div');
                // and also it will add a cusotome class to help being a fly pop up 
                this.container.className = 'aypp-custome-container-false';
                // if the element isn't a jsdom element it will inner html it 
                if(options.elementIsString){
                    this.container.innerHTML = el
                }else{
                    // or if itsn't it will append it 
                    this.container.append(el)
                }

                document.body.append(this.container)
            }
            // if true then ...
            else
            {
                // creating the container and inserting it to the dom
                this.container = document.createElement('div');
                // this will check if there is some styles for the container and it will print it on the container 
                if(options && options.styles && options.styles.container){
                    this.container.style = options.styles.container
                    // and also it will add a cusotome class to help being a fly pop up 
                    this.container.className = 'aypp-custome-container-false';
                    
                }else {
                    // if otherwise it will add the default class 
                    this.container.className = 'aypp-custome-container';
                }


                // this will check if the element going to be a string and it will inner it to the container
                if(options.elementIsString){
                    this.container.innerHTML = el
                }
                // other wise it will append it  
                else
                {
                    this.container.append(el)
                }


                // here it will append the container to the dom 
                document.body.append(this.container)
            }
            

            // this shows the status bcz if the status is true then this means yes and it will help us in the open and close functs
            this.status = true


            // if there is some thing wrong we catch the errs and print it to the conosole
        }catch (err){
            console.error(err)
        }
    }

    close(){

        // throwing errs if there are some
        if(!this.status){
            throw new Error('its already closed!!')
        }
            // if not it will remove the el and changing the status
        else{
            this.container.remove()
            this.status = false
        }
    }

    // to open 
    open(){
        // we catch the errs using 'try' 
        try{
            // if the status true it will throw an err
            if(this.status){
                throw new Error('its already opened!!')
            }
            // if not it will append the element again
            else{
                document.body.append(this.container)
                
                // and for sure if you open it, it will change the status 
                this.status = true
            }

            // as always catching errs
        }catch (err){
            console.log(err)
        }
    }
}

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
        ayppc : ayppc
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

    ******************************
        cite (  2  ) {
            * just wanna mention that it will create a container to to fit your element
            * this is the schema of the options object {
                options: {
                    elementIsString: boolean, 
                    notContainer: boolean,
                    styles: {
                        container: String

                    }
                }
            }
        }
    ******************************



*/


    export default aypp