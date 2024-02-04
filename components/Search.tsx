import { ChangeEvent } from 'react'

import Header from './Header'
import Suggestions from './Suggestions'

import { optionType } from './../types/index'
import Forecast from './Forecast'
import useForecast from '@/hooks/useForecast'

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => (
  <section className="w-full md:max-w-[500px] p-2 flex flex-col text-center items-center  md:px-10 lg:p-8  text-slate-950 drop-shadow-md">
    <Header></Header>

    <div className="flex mt-2 md:mt-8">
      <input
        type="text"
        value={term}
        className="px-2 py-1 text-lg rounded-l-md border-2 border-slate-950"
        onChange={onInputChange}
        placeholder='City or Country'
      />

      <Suggestions options={options} onSelect={onOptionSelect} />

      <button
        className=" relative rounded-r-md border-2 border-slate-950 hover:border-white hover:text-white text-slate-950 px-8 py-2 cursor-pointer"
        onClick={onSubmit}
      >
        Search
      </button>
      
    </div>
    
  </section>
)

export default Search