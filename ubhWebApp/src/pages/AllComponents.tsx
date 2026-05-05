import { Header1, Header2, Header3, Header4, Header5 } from "../components/typography/Header";
import { Body1, Body2, Caption } from "../components/typography/Body";

export default function AllComponents() {
    return (
        <div>
            <Header1>UBH Components Library</Header1>

            <Header2>Typography</Header2>
            <section>
                <Header1>Header 1</Header1>
                <Caption>fontSize: 40px, weight: 700, lineHeight: 1.2</Caption>

                <Header2>Header 2</Header2>
                <Caption>fontSize: 32px, weight: 600, lineHeight: 1.3</Caption>

                <Header3>Header 3</Header3>
                <Caption>fontSize: 28px, weight: 500, lineHeight: 1.35</Caption>

                <Header4>Header 4</Header4>
                <Caption>fontSize: 24px, weight: 400, lineHeight: 1.4</Caption>

                <Header5>Header 5</Header5>
                <Caption>fontSize: 20px, weight: 400, lineHeight: 1.45</Caption>
            </section>
            <section>
                <Body1>Body 1</Body1>
                <Caption>fontSize: 16px, weight: 400</Caption>

                <Body2>Body 2</Body2>
                <Caption>fontSize: 14px, weight: 400</Caption>

                <Caption>Caption / Label - 12px</Caption>
            </section>
        </div>
    );
}