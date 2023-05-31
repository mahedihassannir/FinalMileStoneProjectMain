
import { data } from "autoprefixer";
import { useRef } from "react";
const Admin = () => {
    const fileInputRef = useRef(null);


    // this is teh image upload api key 
    const image_Hosting_Key = `698425c776e130e7f9892669cc104ec3`

    // here is teh link where you want to upload
    const url = `https://api.imgbb.com/1/upload?key=${image_Hosting_Key}`

    // https://api.imgbb.com/1/upload
    console.log(image_Hosting_Key);

    const handleimage = (e) => {

        e.preventDefault()

        // const from = e.target

        const image = fileInputRef.current.files[0];
        // first you get the data from the input field
        console.log(image);

        /*{
then you make a from data for fetch the data to upload the image on the hosting server  

then 

new formData

then push the data from or append the data on from data then fetch the data 

in this way fetch the image_Hosting-Key then method is post body is formData

.then  make it in json 

.then =>{
    clg the data
}

        }*/

        const formData = new FormData()

        formData.append('image', image)

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())

            .then(image => {
                console.log(image);

                if (image.success) {
                    const img = image.data.display_url

                    const { name, price, category, recipe } = data

                    const newItem = { name, price, category, recipe, image: img }
                    console.log(newItem);
                }




            })




    }


    return (
        <div>

            <h1>hi i am admin</h1>
            <br />

            <section>
                <form onSubmit={handleimage}>

                    <input type="file" ref={fileInputRef} />

                    <input className="btn btn-primary" type="submit" value="upload">


                    </input>
                </form>
            </section>



        </div>
    );
};

export default Admin;