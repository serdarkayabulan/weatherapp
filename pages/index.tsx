import Forecast from '@/components/Forecast'
import Search from '@/components/Search'
import React from 'react';
import useForecast from '@/hooks/useForecast'
import Head from 'next/head';
import { Hedvig_Letters_Serif, Inter } from 'next/font/google'

//const inter = Inter({ subsets: ["latin"] });
const hedvig = Hedvig_Letters_Serif({
  weight: '400',
  subsets: ['latin'],
})

export default function Home():JSX.Element {

  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } = useForecast()

return (
  
  //<main className="flex justify-center items-center bg-gradient-to-br from-sky-400  to-yellow-400  h-[100vh] w-full">
  <main className={hedvig.className+" flex flex-col my-16  justify-center  mx-auto bg-zinc-900   w-full  md:max-w-[500px]  text-center  md:px-10 lg:p-8 sm:h-[90vh] lg:h-[90vh] bg-gradient-to-br from-sky-600  to-sky-900 bg-opacity-30 backdrop-blur-ls rounded-lg drop-shadow-lg  text-slate-950 shadow-lg"} >
    <Head>
        <title>Weather Forecast</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    
      
    
      <Search
        term={term}
        options={options}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />
      {forecast ? (  
      <Forecast data={forecast} />  ) 
      : 
      ( <div></div> )}
      
    
  </main>
)
  
}
//{forecast ? (  <Forecast data={forecast} />  ) : (    <Search      term={term}      options={options}      onInputChange={onInputChange}   onOptionSelect={onOptionSelect}      onSubmit={onSubmit}  /> )}
/*
{forecast ? (  
      <Forecast data={forecast} />  ) 
      : 
      ( <div></div> )}

*/