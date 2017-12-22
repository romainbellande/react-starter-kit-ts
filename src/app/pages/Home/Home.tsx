import * as React from 'react';
import './Home.scss';

import { Hello } from '../../components';

export class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <section>
        <Hello />
      </section>
    );
  }
}
