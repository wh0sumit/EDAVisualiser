import {
  ApplicationView,
  Application,
  Outgoing,
  Incoming,
} from '@lagoni/edavisualiser';
import '@lagoni/edavisualiser/styles/default.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <ApplicationView>
        <Application
          id="string"
          defaultContentType="application/json"
          description="Some kind of description"
          title="Application Title"
          version="0.0.1"
          license={{
            name: 'Apache2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0',
          }}
          servers={[
            {
              name: 'Production server',
              url: 'myproduction.com/mqtt',
              description: 'production server description',
              protocol: 'mqtt',
            },
          ]}
        >
          <Outgoing
            channel="Test/test/test"
            description="Test description"
            id="testid2"
            messages={[{ title: 'test' }]}
          ></Outgoing>
          <Incoming
            channel="Test/test/"
            description="Test description"
            id="testid"
            messages={[{ title: 'test' }]}
          ></Incoming>
        </Application>
      </ApplicationView>
    </div>
  );
}

export default App;
