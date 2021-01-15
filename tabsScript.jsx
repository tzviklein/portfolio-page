class TabbedSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        aboutSectionHeight: -99.5,
        aboutScrollStatus: 'down',
        portfolioSectionHeight: -99.5,
        portfolioScrollStatus: 'down',
        contactSectionHeight: -99.5,
        contactScrollStatus: 'down',
      }
      this.handleWhoClick = this.handleWhoClick.bind(this);
      this.handleWhatClick = this.handleWhatClick.bind(this);
      this.handleWhereClick = this.handleWhereClick.bind(this);
    }
     
    handleWhoClick() {
      if(this.state.aboutScrollStatus === 'down') {//this if statement is triggered when you first click 'who'
        this.scrollAbout = setInterval(() => {
          if(this.state.aboutSectionHeight > -5.3) {//maybe i did this a little backwards but this is the end of the animation when it reaches the top
            this.setState({
              aboutSectionHeight: -5,
              aboutScrollStatus: 'up',
            });
            clearInterval(this.scrollAbout);//and that's why i clear here
          } else {//THIS is where the animation actually runs till it stops
            this.setState({
              aboutSectionHeight: this.state.aboutSectionHeight + 0.2,
              aboutScrollStatus: 'moving up',
            });
          }
        }, 1000/60)
      } else if(this.state.aboutScrollStatus === 'up') {//same as above but for the way down after you'v reached the top
        this.scrollAbout = setInterval(() => {
          if(this.state.aboutSectionHeight < -99.3) {
            this.setState({
              aboutSectionHeight: -99.5,
              aboutScrollStatus: 'down',
            });
            clearInterval(this.scrollAbout);
          } else {
            this.setState({
              aboutSectionHeight: this.state.aboutSectionHeight - 0.2,
              aboutScrollStatus: 'moving down',
            });
          }
        }, 1000/60)
      } else if(this.state.aboutScrollStatus === 'moving up') {// this part takes care of double tapping
        clearInterval(this.scrollAbout);
        this.setState({
          aboutScrollStatus: 'up',
        });
        this.checkState = setTimeout(() => {
          this.handleWhoClick();
        }, 100)//line 56 recursion
      } else if(this.state.aboutScrollStatus === 'moving down') {
        clearInterval(this.scrollAbout);
        this.setState({
          aboutScrollStatus: 'down',
        });
        this.checkState = setTimeout(() => {
          this.handleWhoClick();
        }, 100)
      }
    }
  
    
    handleWhatClick() {
      if(this.state.portfolioScrollStatus === 'down') {
        this.scrollPortfolio = setInterval(() => {
          if(this.state.portfolioSectionHeight > -5.3) {
            this.setState({
              portfolioSectionHeight: -5,
              portfolioScrollStatus: 'up',
            });
            clearInterval(this.scrollPortfolio);
          } else {
            this.setState({
              portfolioSectionHeight: this.state.portfolioSectionHeight + 0.2,
              portfolioScrollStatus: 'moving up',
            });
          }
        }, 1000/60)
      } else if(this.state.portfolioScrollStatus === 'up') {
        this.scrollPortfolio = setInterval(() => {
          if(this.state.portfolioSectionHeight < -99.3) {
            this.setState({
              portfolioSectionHeight: -99.5,
              portfolioScrollStatus: 'down',
            });
            clearInterval(this.scrollPortfolio);
          } else {
            this.setState({
              portfolioSectionHeight: this.state.portfolioSectionHeight - 0.2,
              portfolioScrollStatus: 'moving down',
            });
          }
        }, 1000/60)
      } else if(this.state.portfolioScrollStatus === 'moving up') {
        clearInterval(this.scrollPortfolio);
        this.setState({
          portfolioScrollStatus: 'up',
        });
        this.checkState = setTimeout(() => {
          this.handleWhatClick();
        }, 100)
      } else if(this.state.portfolioScrollStatus === 'moving down') {
        clearInterval(this.scrollPortfolio);
        this.setState({
          portfolioScrollStatus: 'down',
        });
        this.checkState = setTimeout(() => {
          this.handleWhatClick();
        }, 100)
      }
    }
    handleWhereClick() {
      if(this.state.contactScrollStatus === 'down') {
        this.scrollContact = setInterval(() => {
          if(this.state.contactSectionHeight > -5.3) {
            this.setState({
              contactSectionHeight: -5,
              contactScrollStatus: 'up',
            });
            clearInterval(this.scrollContact);
          } else {
            this.setState({
              contactSectionHeight: this.state.contactSectionHeight + 0.2,
              contactScrollStatus: 'moving up',
            });
          }
        }, 1000/60)
      } else if(this.state.contactScrollStatus === 'up') {
        this.scrollContact = setInterval(() => {
          if(this.state.contactSectionHeight < -99.3) {
            this.setState({
              contactSectionHeight: -99.5,
              contactScrollStatus: 'down',
            });
            clearInterval(this.scrollContact);
          } else {
            this.setState({
              contactSectionHeight: this.state.contactSectionHeight - 0.2,
              contactScrollStatus: 'moving down',
            });
          }
        }, 1000/60)
      } else if(this.state.contactScrollStatus === 'moving up') {
        clearInterval(this.scrollContact);
        this.setState({
          contactScrollStatus: 'up',
        });
        this.checkState = setTimeout(() => {
          this.handleWhereClick();
        }, 100)
      } else if(this.state.contactScrollStatus === 'moving down') {
        clearInterval(this.scrollContact);
        this.setState({
          contactScrollStatus: 'down',
        });
        this.checkState = setTimeout(() => {
          this.handleWhereClick();
        }, 100)
      }
    }
    
    render() {
      const aboutSecHeight = {bottom: this.state.aboutSectionHeight + 'vh'};
      const portfolioSecHeight = {bottom: this.state.portfolioSectionHeight + 'vh'};
      const contactSecHeight = {bottom: this.state.contactSectionHeight + 'vh'};
      return (
        <div>
          <div class="section" id="aboutSection" style={aboutSecHeight}>
            <a role="button" id="whoTab" onClick={this.handleWhoClick}>who</a>
          </div>
          <div class="section" id="portfolioSection" style={portfolioSecHeight}>
            <a role="button" id="whatTab" onClick={this.handleWhatClick}>what</a>
          </div>
          <div class="section" id="contactSection" style={contactSecHeight}>
            <a role="button" id="whereTab" onClick={this.handleWhereClick}>where</a>
          </div>
        </div>
      )
    }
  }
  
  
  
  
  ReactDOM.render(<TabbedSection />, document.getElementById('sectionHolder'));