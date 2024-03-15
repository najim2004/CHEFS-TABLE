import clock from '../../assets/clock.svg';
import calorie from '../../assets/calories.svg';

import PropTypes from 'prop-types';

const Recipe = props => {
    return (
        <div className='p-6 rounded-2xl border-[1px] border-[rgba(40,40,40,0.20)]'>
            <div className='max-w-[330px] h-[200px] rounded-2xl bg-gray-300'>
                <img className='w-full h-[200px] rounded-2xl' src="" alt="" />
            </div>
            <h3 className='mt-6 mb-4 text-2xl font-semibold'>Spaghetti Bolognese</h3>
            <p className='text-[#878787] leading-[30px]  max-w-[330px] fira-sans'>Classic Italian pasta dish with savory meat sauce.</p>
            <hr className='mt-4 mb-6 border-t-[1px] border-[rgba(40,40,40,0.10)] w-full' />
            <h3 className='mb-4 text-lg'>Ingredients: 6</h3>
            <ul className='list-disc *:ml-6 text-[#878787] text-lg fira-sans'>
                <li>500g ground beef</li>
            </ul>
            <hr className='mt-4 mb-6 border-t-[1px] border-[rgba(40,40,40,0.10)] w-full' />
            <div className="flex gap-4 text-[rgba(40,40,40,0.80)]">
                <p className='flex gap-2 items-center'><img className='size-6 fira-sans' src={clock} alt="" />30 minutes</p>
                <p className='flex gap-2 items-center'><img className='size-6 fira-sans' src={calorie} alt="" />600 calories</p>
            </div>
            <button className='btn bg-[#0BE58A] w-[170px] h-[50px] rounded-[50px] text-lg font-medium mt-6'>Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {

};

export default Recipe;