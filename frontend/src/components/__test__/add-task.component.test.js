import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import user from "@testing-library/user-event";
import AddTask from "../add-task.component";

it("Unit Test, check if component renders on Screen", async () => {
	const { findByRole } = render(<AddTask />);
	expect(await findByRole("button", { type: "submit" })).toBeEnabled();
});

it("Integration Test, on submit is called when form fields are filled", () => {
	const onSubmit = jest.fn();

	const { getByLabelText, getByText } = render(
		<AddTask onSubmit={onSubmit} />
	);
	const title = getByLabelText("Title");
	user.type(title, "Task 1");

	const description = getByLabelText("Description");
	user.type(description, "Description 1");

	fireEvent.click(getByText("Submit"));
	expect(onSubmit).toHaveBeenCalled();
});

