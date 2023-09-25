type RatingProps = {
    rating: number;
    width: number;
    height: number;
}

const Rating: React.FC<RatingProps> = ({ rating, width, height }) => {
    const stars = [];

    width = width || 5;
    height = height || 5;

    for (let i = 0; i < rating; i++) {
        stars.push(
            <svg className={`w-5 h-5 text-yellow-500 fill-current`} viewBox="0 0 24 24" key={i}>
                <path d="M12 2.276l3.09 6.272 6.92.998-5 4.86 1.182 6.914L12 17.705l-6.192 3.615 1.182-6.914-5-4.86 6.92-.998L12 2.276z" />
            </svg>
        )
    }

    return (
        <div className="flex items-center">
            {stars}
        </div>
    )
}

export { Rating };