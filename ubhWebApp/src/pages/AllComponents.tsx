import { Header1, Header2, Header3, Header4, Header5 } from "../components/typography/Header";
import { Body1, Body2, Caption } from "../components/typography/Body";
import { Input } from "../components/input/Input";

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
      <Header4>Inputs:</Header4>
        <Input variant='single-line' label='Single-line (default ⇒ hover ⇒ focused ⇒ filled)' placeholder='Enter text' />
        <Input variant='single-line' label='Single-line (error)' value='Text error' error='This field is required.'/>
        <Input variant='single-line' label='Single-line (loading)' loading={true}/>
        <Input variant='single-line' label='Single-line (disabled)' placeholder='Text cannot be entered' disabled/>
        <Input variant='multi-line' label='Multi-line (default ⇒ hover ⇒ focused ⇒ filled)' placeholder='Enter text' />
        <Input variant='multi-line' label='Multi-line (error)' value='Text error' error='This field is required.'/>
        <Input variant='multi-line' label='Multi-line (loading)' loading={true}/>
        <Input variant='multi-line' label='Multi-line (disabled)' placeholder='Text cannot be entered' disabled/>
        <Input variant='numeric' label='Numeric (default ⇒ hover ⇒ focused ⇒ filled)' placeholder='12345678' />
        <Input variant='numeric' label='Numeric (error)' error='This field is required'/>
        <Input variant='numeric' label='Numeric (loading)' loading={true}/>
        <Input variant='numeric' label='Numeric (disabled)' placeholder='12345678' disabled/>
        <Input variant='email' label='Email (default ⇒ hover ⇒ focused ⇒ filled)' placeholder='user@example.com' />
        <Input variant='email' label='Email (error)' value='user@invalid' error='This field is of an invalid format.'/>
        <Input variant='email' label='Email (loading)' value='user@saving.com' loading={true}/>
        <Input variant='email' label='Email (disabled)' placeholder='user@example.com' disabled/>
        <Input variant='phone' label='Phone (default ⇒ hover ⇒ focused ⇒ filled)' placeholder='+61 423 456 789' />
        <Input variant='phone' label='Phone (error)' value='+61 423 4' error='This field is of an invalid format.'/>
        <Input variant='phone' label='Phone (loading)' value='+61 423 456 789' loading={true}/>
        <Input variant='phone' label='Phone (disabled)' placeholder='+61 423 456 789' disabled/>
    </div>
  );
}