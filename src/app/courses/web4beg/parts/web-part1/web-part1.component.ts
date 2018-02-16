import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-part1',
  templateUrl: './web-part1.component.html',
  styleUrls: ['./web-part1.component.css']
})
export class WebPart1Component implements OnInit {

  constructor() { }

  htmlExample = `
  <pre>
    <code class="html highlight">
    &lt;!doctype html&gt;
    &lt;html&gt;
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;h1&gt;Hello World!&lt;/h1&gt;
            &lt;p&gt;Some paragraph text&lt;/p&gt;
            &lt;!-- an html comment --&gt;
        &lt;/body&gt;
    &lt;/html&gt;  
    </code>
  </pre>
        `;

  cssExample = `
  <pre>
    <code class="css highlight">
    .some-class { property: modifier; }
    #some-id { property: modifier; }
    /* CSS comment */
    </code>
  </pre>
  `;

  tagExample = `<pre><code class="html highlight">&lt; &gt; &lt;/ &gt;</code></pre>`;

  commonTags = `<pre><code class="html highlight">&lt;div&gt;&lt;/div&gt; &lt;p&gt;&lt;/p&gt; &lt;h1&gt;&lt;/h1&gt; &lt;a&gt;&lt;/a&gt; &lt;span&gt;&lt;/span&gt;</code></pre>`;

  closingTags = `<pre><code class="html highlight">&lt;img/&gt; &lt;link/&gt; &lt;br/&gt; &lt;meta/&gt;</code></pre>`;

  headerExamples = `
    <pre>
      <code class="html highlight">
      &lt;h1&gt;Header 1&lt;/h1&gt;
      &lt;h2&gt;Header 2&lt;/h2&gt;
      &lt;h3&gt;Header 3&lt;/h3&gt;
      &lt;h4&gt;Header 4&lt;/h4&gt;
      </code>
    </pre>
    `;

  commonTagExamples = `
    <pre>
      <code class="html highlight">
      &lt;p&gt;This is paragraph text&lt;/p&gt;
      &lt;a href="google.com"&gt;Link&lt;/a&gt;
      &lt;ul&gt;
        &lt;li&gt;List&lt;/li&gt;
        &lt;li&gt;List&lt;/li&gt;
      &lt;/ul&gt;
      </code>
    </pre>
    `;

  firstCss = `
    <pre>
      <code class="css highlight">
        body {
          background-color: red;
        }
        
        h1 {
          color: green;
        }
        
        p {
          color: white;
        }
      </code>
    </pre>
    `;

  ngOnInit() {
  }

}
