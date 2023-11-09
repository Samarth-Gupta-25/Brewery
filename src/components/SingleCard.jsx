import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams,Link, useNavigate } from 'react-router-dom';
import Review from './Review';

function SingleCard({brewery}) {
    const [reviews, setReviews] = useState([]);
    const [userRating, setUserRating] = useState(0);
    const [userComments, setUserComments] = useState("");
    const navigate = useNavigate();
    let {id} = useParams();
    var a=[];
    const getReviews = async() => {
        const data = await axios.get('http://localhost:3000/reviews');
        const result = data.data.filter((obj) =>obj.brewery_id == a[0].id)
        // console.log("reviews", data.data)
        setReviews(result);
        // console.log(reviews, "review")
    }
    let num = 0;
    const sendReview = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/reviews", {
            rating: userRating,
            comments: userComments,
            brewery_id: a[0].id
        }).then(function (response) {
            setUserRating(0);
            setUserComments("");
          })
          .catch(function (error) {
            console.log(error);
          });;
    }
    useEffect(() => {
        getReviews();
    }, [num])
    async function jdf(){a=brewery.filter(b=>b.id === id);}
    jdf();

    console.log(a[0]);

  return (
    
    <div className='flex flex-col justify-center items-center h-screen relative w-full gap-3'>
       
        <div className='fixed top-0 border-b w-full flex justify-center items-center h-12 z-10'>
            <Link to='/'>
                <h1 className='text-black text-2xl font-bold'>Brewery</h1>
            </Link>
        </div>
        <div className=''>
      
      <h1>{a[0].name} is located in {a[0].address_1}, {a[0].city}, {a[0].state}, {a[0].country} ia a {a[0].brewery_type} type property.</h1>
      <h1>Contact details: {a[0].phone}</h1>
      <h1>Site url: <a href={a[0].website_url}>{a[0].website_url}</a></h1>


    </div>
    <div className='mt-3 flex flex-col items-center justify-center gap-4'>
    <div>Reviews:</div>
    <div className='flex gap-2'>
        {reviews.map((review) => {
            return <Review review={review} key={review.id} />
        })}
    </div>
    </div>
    <div className='flex flex-col items-center justify-center gap-2 mt-4 border-2 p-2 rounded-md'>
        <p className='underline font-bold'>Add a review</p>
        <form onSubmit={sendReview} className='flex flex-col'>
            <label className='mb-1'>
                Rating:
            </label>
            <input type='number' max={5} min={0} onChange={(event) => setUserRating(event.target.value)} className='border p-1 mb-3'></input>
            <label className='mb-1'>Comments:</label>
            <textarea onChange={(event) => setUserComments( event.target.value)} rows={5} cols={60} className='border'></textarea>
      <button className='bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-2'>Add comment</button>
        </form>
    </div>
    
    </div>
  )
}

export default SingleCard;
