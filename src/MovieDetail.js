import React from 'react';

const dictionaryOfMovies = {
    "Avengers: Endgame": "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, AVENGERS: ENDGAME.",
    "The Curse Of La Llorona": "This timeless Hispanic legend comes to terrifying life in THE CURSE OF LA LLORONA. The Weeping Woman. A horrifying apparition, caught between Heaven and Hell, trapped in a terrible fate sealed by her own hand. The mere mention of her name has struck terror around the world for generations. In life, she drowned her children in a jealous rage, throwing herself in the churning river after them as she wept in pain. Now her tears are eternal. They are lethal, and those who hear her death call in the night are doomed. La Llorona creeps in the shadows and preys on the children, desperate to replace her own. As the centuries have passed, her desire has grown more voracious...and her methods more terrifying. In 1970s Los Angeles, La Llorona is stalking the night - and the children. Ignoring the eerie warning of a troubled mother suspected of child endangerment, a social worker and her own small kids are soon drawn into a frightening supernatural realm. Their only hope to survive La Llorona's deadly wrath may be a curandero, and the mysticism he practices to keep evil at bay, on the fringes where fear and faith collide. Beware of her chilling wail...she will stop at nothing to lure you into the gloom. Because there is no peace for her anguish. There is no mercy for her soul. And there is no escape from the curse of La Llorona.",
    "Breakthrough": "BREAKTHROUGH is based on the inspirational true story of one mother's unfaltering love in the face of impossible odds. When Joyce Smith's adopted son John falls through an icy Missouri lake, all hope seems lost. But as John lies lifeless, Joyce refuses to give up. Her steadfast belief inspires those around her to continue to pray for John's recovery, even in the face of every case history and scientific prediction. From producer DeVon Franklin (Miracles from Heaven) and adapted for the screen by Grant Nieporte (Seven Pounds) from Joyce Smith's own book, BREAKTHROUGH is an enthralling reminder that faith and love can create a mountain of hope, and sometimes even a miracle.",
    "Little": "Girls Trip’s Regina Hall and Black-ish’s Marsai Martin both star as Jordan Sanders — Hall as the take-no-prisoners tech mogul adult version of Jordan and Martin as the 13-year-old version of her who wakes up in her adult self’s penthouse just before a do-or-die presentation. Insecure’s Issa Rae plays Jordan’s long-suffering assistant April, the only one in on the secret that her daily tormentor is now trapped in an awkward tween body just as everything is on the line. Little is an irreverent new comedy about the price of success, the power of sisterhood and having a second chance to grow up — and glow up — right."
}

function MovieDetail(props) {
    const detail = dictionaryOfMovies[props.match.params.movie];

    return (
        <div>
            <h2>{props.match.params.movie}</h2>
            <p>
                {detail}
            </p>
        </div>
    )
}


export default MovieDetail;