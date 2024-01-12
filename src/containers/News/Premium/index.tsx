import { getPremium } from "../../../api/getPremium";
import { Card } from "../../../components";
import styles from '../../Home/Home.module.css'
import {useQuery } from 'react-query';


const Premium = () => {

    const  {data} = useQuery('getPremium', getPremium);

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

export default Premium;