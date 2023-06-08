import { Form } from "@remix-run/react";

export function EasySearch(){
    
  return (
      <main>
        <br />
        <br />
        <Form method="post" action="adv">
          <label htmlFor='isbn'>ISBN: </label>
          <br />
          <textarea name="isbn" id="isbn" rows={1} cols={60} />
          <br />
          <br />
          <input type="submit" value="Search for Book" />
        </Form>
      </main>
    );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <div className="error-container">
      Something unexpected went wrong. Sorry about that.
    </div>
  );
}