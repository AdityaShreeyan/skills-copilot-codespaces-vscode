function skillsMember() {
    // Skills
    var skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'NodeJS',
        'SQL',
        'MongoDB'
    ];

    return (
        <div>
            <h1>Skills</h1>
            <ul>
                {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}