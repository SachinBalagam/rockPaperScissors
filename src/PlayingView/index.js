import {Image, CustomButton} from './styledComponents'

const PlayingView = props => {
  const {details, onImageClick} = props
  const {imageUrl, id, test} = details

  const onClickImage = () => {
    onImageClick(id)
  }

  return (
    <li>
      <CustomButton type="button" onClick={onClickImage} data-testid={test}>
        <Image src={imageUrl} alt={id} />
      </CustomButton>
    </li>
  )
}

export default PlayingView
