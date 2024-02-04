import Feels from './Icons/Feels'
import Humidity from './Icons/Humidity'
import Pop from './Icons/Pop'
import Pressure from './Icons/Pressure'
import Visibility from './Icons/Visibility'
import Wind from './Icons/Wind'

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
  title: string
  info: string | JSX.Element
  description?: string | JSX.Element
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
}

const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon]

  return (
    <article className="flex flex-wrap px-4 py-2  mx-auto w-full text-md  items-center justify-items-center bg-white bg-opacity-20 backdrop-blur-ls rounded-full drop-shadow-lg mb-2">
      <div className="flex flex-wrap items-center text-base font-bold">
        <Icon /> <h4 className="ml-1 m-2">{title}</h4>
      </div>
      <h3 className="m-2 text-md font-bold">{info}</h3>

      <div className="text-md ">{description}</div>
    </article>
  )
}
export default Tile