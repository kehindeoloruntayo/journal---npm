import $ from 'jquery';
import Entry from './js/journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Logo from './assets/img/journal.jpg';

$("link").attr("href", Logo)
$("#submitEntry").click(() => {
    const title = $("#title").val();
    const body = $("#body").val();
    const entry = new Entry(title, body);

    // Display entry information
    const infoHtml = `
        <h2>${entry.title}</h2>
        <p>Word Count: ${entry.wordCount()}</p>
        <p>Vowel Count: ${entry.vowelCount()}</p>
        <p>Consonant Count: ${entry.consonantCount()}</p>
        <p>Teaser: ${entry.getTeaser()}</p>
    `;

    $("#entryInfo").html(infoHtml);
});