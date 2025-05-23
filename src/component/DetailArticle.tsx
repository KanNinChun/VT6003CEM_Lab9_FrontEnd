import React from 'react';
import articles from '../data/articles.json';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';

const DetailArticle = (props :any) => {
    const { aid } = useParams();
    const navigate = useNavigate();
    for (const article of articles) {
        if (article.id === Number(aid)) {
            return (
                <>
                    <h1>{article.title}</h1>
                    <p>{article.fullText}</p>
                    <Button type="primary" icon={<RollbackOutlined />}
                        onClick={() => navigate(-1)} />
                </>
            );
        }
    }
}
export default DetailArticle;