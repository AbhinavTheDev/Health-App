import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function ECommerce() {
    const [recommendedProducts, setRecommendedProducts] = React.useState([]);
    const [userInput, setUserInput] = React.useState('');

    const fetchRecommendedProducts = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/skincare-recommendations', { userInput });
            setRecommendedProducts(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Navbar />
            <h2>Skincare Recommendations</h2>
            <input
                type="text"
                placeholder="Enter your skin type and concerns"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={fetchRecommendedProducts}>Get Recommendations</button>
            <ul>
                {recommendedProducts.map((product) => (
                    <li key={product.product_name}>
                        <a href={product.product_url}>{product.product_name}</a> - Price: ${product.price}
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
}

export default ECommerce;
