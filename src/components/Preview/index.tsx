import './styles.css';

type Props = {
    title: string;
    previewText: string;
    picture: string;
};

export const PreviewCard = ({title, previewText, picture}: Props) => (
    <div className="preview">
        <div className="picture-background">
            <img className="picture" src={require(`../../pictures/${picture}`)} />
        </div>

        <div className="text-block">
            <h2 className="desert-title">{title}</h2>
            <p className="description">{previewText}</p>
        </div>
    </div>
);
