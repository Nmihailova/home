import './styles.css';

type Props = {
    title: string;
    previewText: string;
    picture: string;
};

export const PreviewCard = ({title, previewText, picture}: Props) => (
    <div className="preview">
        <img className="picture" src={require(`../../pictures/${picture}`)} />
        <h2>{title}</h2>
        <div className="description">{previewText}</div>
    </div>
);
