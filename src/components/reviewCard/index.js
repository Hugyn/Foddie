import React from 'react'

// styles
import styles from "./ReviewCard.module.css"


function ReviewCard(props) {
    return (
        <div  key={props.key} id={props.id} className={`${styles.reviewCardContainer} ${props.className}`}>
            <div className={styles.cardImageContainer}>
                {/* Reviews Photo Container */}
                <div className={styles.cardImage} style={{backgroundImage:`url(${props.image})`}}></div>
            </div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{props.title}</h3>
                <p className={styles.cardContent}>{props.cardContent}</p>
                {/* Likes and comments */}
                <div className={styles.likesContainer}>
                    <span>
                        <img className={styles.commentsIcon} src="/icons/comment.png" height={13} width={13}/>
                        <p>{props.commentsCount}</p>
                    </span>
                    <span>
                        <img className={styles.likesIcon} src="/icons/likes.png" height={13} width={13}/>
                        <p>{props.likesCount.toLocaleString("en-US").slice(0, -1)}{props.likesCount > 999 ? 'K' : null}</p>
                    </span>
                </div>
            </div>
            {/* //Card Details & Decorations */}
            {props.detailStripes == "true" ? (
                 <img className={styles.detailsStripes} src='/icons/detail01.png' width={24} height={72}/>
            ) : null}
            {props.detailCrosses == 'large' ? (
                <img className={styles.detailsCrossLarge} src='/icons/detail02.png' width={134} height={98}/>
            ) : props.detailCrosses == "small" ? (
                <img className={styles.detailsCrossSmall} src='/icons/detail03.png' width={134} height={98}/>
            ) : null}
        </div>
    )
}

export default ReviewCard;
