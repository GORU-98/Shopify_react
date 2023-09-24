import React from 'react'

const Signup = () => {
  return (
    <>
    <div className='Signup_page'>

               <div className="bg_vdd">
                    <video autoPlay muted loop id="myVideo">
                    <source src="./video/Baroque - 138064.mp4" type="video/mp4"/>
                    </video>
               </div>
                   

    
        <form action="/FORMpage" method="post" className='signup_form'>

                       

                            <label for="name">First name</label>
                            <input type="text" name="name" id="name" autofocus required />

                <label for="lastname">last name</label>
                <input type="text" name="lastname" id="lastname" required/>
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" required />

                            <label for="mobilenumber">Mobile Number</label>
                            <input type="number" name="mobilenumber" id="mobilenumber" required min="1111111111" max="9999999999"/>

                <label for="Gender">Gender</label>
                    <span class="span_gn">
                        <label for="Male">Male</label>
                        <input type="radio" value="Male" name="gender" id="Male"  required/> <label for="female">Female</label>
                        <input type="radio" value="Female" name="gender" id="feMale" required/>
                    </span>

                     <label for="fcoffee">Choose Your Favourite Brand </label>
                    <input list="Favouritebrand" name="favouritebrand" id="fcoffee" required/>
                    <datalist id="Favouritebrand">
                        <option value="Adidas"/>
                        <option value="Allen Solly"/>
                        <option value="Biba"/>
                        <option value="Calvin Klein"/>
                        <option value="Levi's "/>
                            <option value="Nike"/>
                    </datalist>

                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" required/>

                <label for="confirmpassword">Confirm Password</label>
                <input type="password" name="confirmpassword" id="confirmpassword" required/>

                 {/* <input type="submit" value="Submit" className='btn'/> */}
                 <button className='btn'>Submit</button>
           
        </form>

        <div class="sctn_txt">
            <div class="tx1">
                <h1 >Panchal Industries</h1>
                <h2>Start your Shopping today with a lot of<span class="spn"> variety of clothes. </span> <br /> Catch out latest fashion on <br /> <span class="spn">big discounts...</span> </h2>
                <h3>I love vintage shopping, I think its really fun. And I love the feeling of finding the most amazing piece for less</h3>
                
            </div>

        </div>


    
    </div>
    </>
  )
}

export default Signup
