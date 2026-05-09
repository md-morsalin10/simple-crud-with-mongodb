"use client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddUsers = ({ userDataCreate }) => {
    return (
        <div>
            <Modal>
                <Button variant="secondary"> +Add users</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                Add New User
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form action={userDataCreate} className="flex flex-col gap-4">
                                        <TextField className="w-full" name="name" type="text">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>
                                        <TextField className="w-full" name="email" type="email">
                                            <Label>Email</Label>
                                            <Input placeholder="Enter your email" />
                                        </TextField>
                                        <TextField className="w-full" name="role" type="tel">
                                            <Label>Role</Label>
                                            <Input placeholder="Enter your Role" />
                                        </TextField>

                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type="submit" slot="close">Add user</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default AddUsers;