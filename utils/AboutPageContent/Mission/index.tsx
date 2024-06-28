import Mission from 'assets/images/images/Mission.png'
import Vision from 'assets/images/images/Vision.png'
import Value from 'assets/images/images/Value.png'
import { missionDataType } from 'utils/AboutPageContent/Mission/types'

export const missionData: missionDataType[] = [
  {
    image: Mission,
    text: 'Mission',
    description:
      'To provide opportunities for miners to maximize profitability and maintain a competitive edge during all cycles in the market.'
  },
  {
    image: Vision,
    text: 'Vision',
    description:
      'To decentralize bitcoin hashrate by providing opportunities for retail miners to compete with  institutional players.'
  },
  {
    image: Value,
    text: 'Value',
    description:
      'Integrity and transparency are fundamental to Basic Mining. Although we strive for perfection, when challenges arise we will be transparent with our members as we work towards a solution.'
  }
]
