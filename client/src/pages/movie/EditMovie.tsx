export interface IParams {
  id: string;
}

export const EditMovie: React.FC<IParams> = props => {




  return (
    <div>
      修改页
      {props.id}
    </div>
  )
} 