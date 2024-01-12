import { getNews } from "../../api/getHomeNews";
import { Card } from "../../components";
import styles from './Home.module.css'
import {useQuery } from 'react-query';


const Home = () => {

    const  {data} = useQuery('getNews', getNews);

    console.log(data);


    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                {data?.articles.map((article) => (
                    <Card key={article.id}>

                        <Card padding={15}>

                            <p>{article.author}</p>
                            <h2 className="font-bold">{article.title}</h2>
                            <p>{article.description}</p>
                            <img src={article.urlToImage}></img>
                            {/* <img>{article.urlToImage}</img> */}


                        </Card>

                    </Card>
                ))
                }
            </div>

        </div>
    )
}

export default Home;