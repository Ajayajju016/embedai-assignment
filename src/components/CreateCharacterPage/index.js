import React, {Component} from 'react'
import './index.css'

class CreateCharacterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterName: '',
      tagline: '',
      description: '',
      greeting: '',
      visibility: 'public',
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    // You can handle form submission here, like sending data to the server
    console.log('Form submitted:', this.state)
  }

  render() {
    const {characterName, tagline, description, greeting, visibility} =
      this.state

    return (
      <div className="character-page">
        <h1>Create Character</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Character Name:</label>
            <input
              type="text"
              name="characterName"
              value={characterName}
              onChange={this.handleChange}
              maxLength={20}
              placeholder="e.g.Albert Einstein"
            />
          </div>
          <div className="form-group">
            <label>Tagline:</label>
            <input
              type="text"
              name="tagline"
              value={tagline}
              onChange={this.handleChange}
              maxLength={50}
              placeholder="Add a short tagline of your character"
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={description}
              onChange={this.handleChange}
              maxLength={500}
              placeholder="How would yourCharacter Describe themselves"
            />
          </div>
          <div className="form-group">
            <label>Greeting:</label>
            <textarea
              name="greeting"
              value={greeting}
              onChange={this.handleChange}
              maxLength={2048}
              placeholder="e.g. Hello iam Albert.Ask me about my scientific contributions."
            />
          </div>
          <div className="form-group">
            <label>Visibility:</label>
            <select
              name="visibility"
              value={visibility}
              onChange={this.handleChange}
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          <button type="submit" className="create-character-btn">
            Create Character
          </button>
        </form>
      </div>
    )
  }
}

export default CreateCharacterPage
